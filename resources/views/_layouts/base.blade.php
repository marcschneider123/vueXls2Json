<!DOCTYPE html>
<html lang="de">
<head>
    @include('_layouts.header')
</head>
<body id="page-top" class="{{$class ?? ''}}" data-spy="scroll" data-offset="100" data-target="#mainNav">
	<div id="app" class="content">
		@yield('content')
	</div>
@include('_layouts.scripts')
</body>
</html>
