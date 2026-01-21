<x-mail::message>
# New Contact Form Submission

**Name:** {{ $submission['name'] }}  
**Email:** {{ $submission['email'] }}  

**Message:**  
{{ $submission['message'] }}

<x-mail::button :url="config('app.url') . '/admin'">
View in Admin Panel
</x-mail::button>


</x-mail::message>
