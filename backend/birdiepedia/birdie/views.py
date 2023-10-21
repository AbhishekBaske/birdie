from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import User, Birdie
from .serializers import UserSerializer, BirdieSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Custom GET method
    def get(self, request, *args, **kwargs):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    # Custom POST method
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BirdieViewSet(viewsets.ModelViewSet):
    queryset = Birdie.objects.all()
    serializer_class = BirdieSerializer

    # Custom GET method
    def get(self, request, *args, **kwargs):
        birdies = Birdie.objects.all()
        serializer = BirdieSerializer(birdies, many=True)
        return Response(serializer.data)

    # Custom POST method
    def post(self, request, *args, **kwargs):
        serializer = BirdieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class BirdieUpdateViewSet(viewsets.ModelViewSet):
    queryset = Birdie.objects.all()
    serializer_class = BirdieSerializer

    

    # Custom GET method
    def get(self, request, *args, **kwargs):
        birdies = Birdie.objects.all()
        serializer = BirdieSerializer(birdies, many=True)
        return Response(serializer.data)

    # Custom POST method
    def post(self, request, *args, **kwargs):
        serializer = BirdieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
