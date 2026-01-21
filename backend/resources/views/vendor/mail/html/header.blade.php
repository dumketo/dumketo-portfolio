@props(['url'])
<tr>
<td class="header" style="padding: 0;">
<a href="{{ $url }}" style="display: block;">
@if (trim($slot) === 'Laravel')
<img src="{{ asset('images/email-logo.png') }}" class="logo" alt="Hasan Ahmed Jobayer" style="width: 100%; max-width: 600px; height: auto; display: block; margin: 0 auto;">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
