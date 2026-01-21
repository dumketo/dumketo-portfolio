<?php

namespace App\Filament\Resources\SkillResource\Pages;

use App\Filament\Resources\SkillResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSkills extends ListRecords
{
    protected static string $resource = SkillResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    public function reorderTable(array $order): void
    {
        foreach ($order as $index => $recordKey) {
            static::getResource()::getModel()::find($recordKey)->update([
                'sort' => $index + 1,
            ]);
        }
    }
}
