FROM php:8.2-cli

# 1. Install Extension Installer Script (Handles system deps automatically)
ADD --chmod=0755 https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

# 2. Install MongoDB & ZIP (via the helper script)
RUN install-php-extensions mongodb zip unzip

# 3. Install System Utils (Git, Curl) & Node.js
# We combine these to reduce layers, but keep it simple
RUN apt-get update && apt-get install -y \
    git \
    curl \
    gnupg \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# 4. Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# 5. Copy Composer files and install PHP deps
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

# 6. Copy Package files and install JS deps
COPY package.json package-lock.json ./
RUN npm ci

# 7. Copy application files
COPY . .

# 8. Build frontend assets
RUN npm run build

# 9. Run final PHP setup
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Expose port
EXPOSE 8080

# Start command
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
