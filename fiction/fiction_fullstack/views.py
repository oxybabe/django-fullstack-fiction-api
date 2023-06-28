# from django.shortcuts import render
# from rest_framework import APIView
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