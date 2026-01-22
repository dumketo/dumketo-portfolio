FROM php:8.2-cli-alpine

# 1. Install System Dependencies (Alpine version)
# 'build-base' and 'autoconf' are needed to compile the mongodb extension
RUN apk add --no-cache \
    git \
    curl \
    unzip \
    nodejs \
    npm \
    autoconf \
    g++ \
    make \
    linux-headers \
    openssl-dev

# 2. Install MongoDB Extension
RUN pecl install mongodb && docker-php-ext-enable mongodb

# 3. Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# 4. Copy Composer files and install PHP deps
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

# 5. Copy Package files and install JS deps
COPY package.json package-lock.json ./
RUN npm ci

# 6. Copy application files
COPY . .

# 7. Build frontend assets
RUN npm run build

# 8. Run final PHP setup
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Expose port
EXPOSE 8080

# Start command
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
