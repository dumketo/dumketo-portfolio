<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('Hasan Ahmed Jobayer');
            $table->string('title')->default('Full Stack WordPress & WooCommerce || Shopify || Webflow Developer');
            $table->text('tagline')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('location')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('resume_url')->nullable();
            $table->string('formspree_url')->nullable();
            $table->text('about')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('facebook_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
