from rest_framework import viewsets

from ..models import Post
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Post instances.
    """
    serializer_class = PostSerializer
    queryset = Post.objects.all()


