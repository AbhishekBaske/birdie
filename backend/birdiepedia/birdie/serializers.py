from rest_framework import serializers
from .models import Birdie, BirdieUpdate, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class BirdieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Birdie
        fields = ('id', 'name', 'description', 'image', 'created_at', 'updated_at')

class BirdieUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BirdieUpdate
        fields = ('id', 'birdie', 'update', 'created_at', 'updated_at')

