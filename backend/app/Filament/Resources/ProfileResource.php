<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProfileResource\Pages;
use App\Filament\Resources\ProfileResource\RelationManagers;
use App\Models\Profile;
use Filament\Actions;
use Filament\Forms;

use Filament\Forms\Components\Section;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProfileResource extends Resource
{
    protected static ?string $model = Profile::class;

    protected static ?string $navigationLabel = 'Profile & Settings';

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form->schema([
                Section::make('Personal Information')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->columnSpanFull(),
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->columnSpanFull()
                            ->helperText('Your professional title or headline'),
                        Forms\Components\Textarea::make('tagline')
                            ->columnSpanFull()
                            ->rows(2)
                            ->helperText('A brief tagline or motto'),
                        Forms\Components\Textarea::make('about')
                            ->columnSpanFull()
                            ->rows(4)
                            ->helperText('Tell visitors about yourself'),
                        Forms\Components\Textarea::make('technical_expertise')
                            ->columnSpanFull()
                            ->rows(3)
                            ->helperText('The text displayed in the "Technical Expertise" section on the homepage.'),
                    ])->columns(2),
                
                Section::make('Contact & Social')
                    ->schema([
                        Forms\Components\TextInput::make('email')
                            ->email()
                            ->required(),
                        Forms\Components\TextInput::make('phone'),
                        Forms\Components\TextInput::make('location')
                            ->columnSpanFull()
                            ->placeholder('City, Country'),
                        Forms\Components\TextInput::make('whatsapp')
                            ->tel()
                            ->placeholder('+880...'),
                        Forms\Components\TextInput::make('linkedin_url')
                            ->url()
                            ->label('LinkedIn URL')
                            ->columnSpanFull()
                            ->placeholder('https://www.linkedin.com/in/...'),
                        Forms\Components\TextInput::make('facebook_url')
                            ->url()
                            ->label('Facebook URL')
                            ->columnSpanFull()
                            ->placeholder('https://www.facebook.com/...'),
                    ])->columns(2),
                
                Section::make('Files & Media')
                    ->schema([
                        Forms\Components\FileUpload::make('image')
                            ->label('Profile Image')
                            ->image()
                            ->imageEditor()
                            ->disk('public')
                            ->directory('profile-images')
                            ->imagePreviewHeight('250')
                            ->helperText('Upload your profile photo')
                            ->columnSpanFull(),
                        Forms\Components\FileUpload::make('resume_url')
                            ->label('Resume/CV')
                            ->disk('public')
                            ->directory('resumes')
                            ->acceptedFileTypes(['application/pdf'])
                            ->downloadable()
                            ->openable()
                            ->helperText('Upload your resume in PDF format')
                            ->columnSpanFull(),
                    ])->columns(1),
                
                Section::make('Security Settings')
                    ->schema([
                        Forms\Components\TextInput::make('turnstile_site_key')
                            ->label('Turnstile Site Key')
                            ->placeholder('0x4AAAAAA...')
                            ->helperText('Cloudflare Turnstile site key for contact form protection'),
                        Forms\Components\TextInput::make('turnstile_secret_key')
                            ->label('Turnstile Secret Key')
                            ->password()
                            ->revealable()
                            ->placeholder('0x4AAAAAA...')
                            ->helperText('Cloudflare Turnstile secret key'),
                    ])->columns(2)->collapsible(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('title'),
                Tables\Columns\TextColumn::make('email'),
                Tables\Columns\TextColumn::make('phone'),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }

    public static function canDelete(\Illuminate\Database\Eloquent\Model $record): bool
    {
        return false;
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProfiles::route('/'),
            'create' => Pages\CreateProfile::route('/create'),
            'edit' => Pages\EditProfile::route('/{record}/edit'),
        ];
    }
}




