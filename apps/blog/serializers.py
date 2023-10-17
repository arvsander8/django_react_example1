from rest_framework import serializers
from .models import *
from ..category.serializers import CategorySerializer


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'views',
            'thumbnail',
            'description',
            'content',
            'time_read',
            'published',
            'category'
        ]

class PostListSerializer(serializers.ModelSerializer):

    category = CategorySerializer()
    class Meta:
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'views',
            'thumbnail',
            'description',
            'time_read',
            'published',
            'category'
        ]
