# from django.shortcuts import render
# from rest_framework import APIView
from django.shortcuts import get_object_or_404, render
from rest_framework.viewsets import ModelViewSet
from .serializers import BookSerializer
from .models import Book
# from rest_framework import generics

# Create your views here.

# class BookAPIView(APIView):
#     def get(self, request):
#         data = Book.objects.all()
#         serializer = BookSerializer(data, many=True )
#         return Response(serializer.data)

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    
def update_book(request, id):
    book = get_object_or_404(Book, id=id)
    if request.method == 'PATCH':
        book.title = request.PATCH.get('title', book.title)
        book.description = request.PATCH.get('description', book.description)
        book.save()
        # json_data = request.PATCH.get(id=id)
    return render(request, 'frontend/index.html', {'id':id})
        
def add_book(request):
    if request.method == 'POST':
        json_data = request.POST.get()
    return render(request, 'frontend/index.html')

def delete_book(request, id):
    id = id
    if request.method == 'DELETE':
        json_data = request.DELETE.get()
    return render(request, 'frontend/index.html', {'id':id})

# class BookUpdateAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer    

        
# https://www.youtube.com/watch?v=K8C2f1_e9VU    