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
    
def update_book(request, id):
    if request.method == 'PUT':
        json_data = request.PUT.get()
    return render(request, 'frontend/index.html')
        
def add_book(request):
    if request.method == 'POST':
        json_data = request.POST.get()
    return render(request, 'frontend/index.html')

def delete_book(request, id):
    id = id
    if request.method == 'DELETE':
        json_data = request.DELETE.get()
    return render(request, 'frontend/index.html', {'id':id})
        
# https://www.youtube.com/watch?v=K8C2f1_e9VU    