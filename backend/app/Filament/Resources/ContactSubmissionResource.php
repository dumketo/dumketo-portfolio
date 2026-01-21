<?php

namespace App\Filament\Resources;

use Filament\Actions;
use Filament\Forms;

use App\Filament\Resources\ContactSubmissionResource\Pages;
use App\Filament\Resources\ContactSubmissionResource\RelationManagers;
use App\Models\ContactSubmission;

use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ContactSubmissionResource extends Resource
{
    protected static ?string $model = ContactSubmission::class;

    protected static ?string $navigationIcon = 'heroicon-o-inbox';
    
    protected static ?string $navigationLabel = 'Inbox';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('name')->readOnly(),
            Forms\Components\TextInput::make('email')->readOnly(),
            Forms\Components\Textarea::make('message')->columnSpanFull()->readOnly(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable(),
                Tables\Columns\TextColumn::make('email')->searchable(),
                Tables\Columns\TextColumn::make('message')
                    ->limit(50)
                    ->tooltip(fn ($record) => $record->message)
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable()->label('Received'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
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

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContactSubmissions::route('/'),
        ];
    }
}




