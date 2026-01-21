<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use App\Models\Profile;

use App\Mail\ContactFormSubmitted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
            // 'captcha_token' => 'required|string', // Check conditionally
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // CAPTCHA Verification logic
        $profile = Profile::first();
        $secretKey = $profile?->turnstile_secret_key ?? env('TURNSTILE_SECRET_KEY') ?? env('RECAPTCHA_SECRET_KEY');
        
        if ($secretKey) {
            if (!$request->has('captcha_token')) {
                 return response()->json(['errors' => ['captcha_token' => ['CAPTCHA token is required.']]], 422);
            }
            
            $endpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

            if (env('RECAPTCHA_SECRET_KEY') && !$profile?->turnstile_secret_key && !env('TURNSTILE_SECRET_KEY')) {
                 $endpoint = 'https://www.google.com/recaptcha/api/siteverify';
            }

            $verifyResponse = Http::asForm()->post($endpoint, [
                'secret' => $secretKey,
                'response' => $request->captcha_token,
                'remoteip' => $request->ip(),
            ]);
            
            $result = $verifyResponse->json();

            if (!isset($result['success']) || !$result['success']) {
                 return response()->json(['message' => 'CAPTCHA verification failed.'], 403);
            }
        }
        
        $submission = ContactSubmission::create($request->only('name', 'email', 'message'));

        // Send Email
        $profile = Profile::first();
        $adminEmail = $profile ? $profile->email : config('mail.from.address');
        
        if ($adminEmail) {
            try {
                 Mail::to($adminEmail)->send(new ContactFormSubmitted($submission->toArray(), $adminEmail));
            } catch (\Exception $e) {
                \Log::error('Contact form email failed: ' . $e->getMessage());
            }
        }

        return response()->json(['message' => 'Message sent successfully!'], 201);
    }
}
