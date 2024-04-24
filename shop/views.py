from django.shortcuts import render


def main_page(request):
    context = {}
    return render(request, 'shop/main_page.html', context)

