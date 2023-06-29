# from django.shortcuts import render
# from rest_framework import APIView
from django.shortcuts import get_object_or_404, render
from rest_framework.viewsets import ModelViewSet
from .serializers import BookSerializer
from .models import Book

# Create your views here.

# class BookAPIView(APIView):
#     def get(self, request):
#         data = Book.objects.all()
#         serializer = BookSerializer(data, many=True )
#         return Response(serializer.data)

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    
def delete_book(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    if request.method == 'DELETE':
        book.delete()
def add_book(request):
    if request.method == 'POST':
        json_data = request.POST.get()
    return render(request, 'frontend/index.html')
        
    