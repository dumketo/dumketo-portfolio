FROM php:8.2-cli-alpine

# Set working directory first
WORKDIR /app

# 1. Install Runtime Dependencies (Lightweight)
RUN apk add --no-cache \
    git \
    curl \
    unzip \
    openssl

# 2. Install Node.js & NPM (Separate layer)
RUN apk add --no-cache \
    nodejs \
    npm

# 3. Install Build Tools (Heavy)
# Required for compiling PECL extensions
RUN apk add --no-cache \
    autoconf \
    g++ \
    make \
    linux-headers \
    openssl-dev

# 4. Install MongoDB Extension
RUN pecl install mongodb && docker-php-ext-enable mongodb

# 5. Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 6. Copy Composer files and install PHP deps
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

# 7. Copy Package files and install JS deps
COPY package.json package-lock.json ./
RUN npm ci

# 8. Copy application files
COPY . .

# 9. Build frontend assets
RUN npm run build

# 10. Run final PHP setup
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Expose port
EXPOSE 8080

# Start command
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
