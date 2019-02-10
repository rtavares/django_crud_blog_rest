
from django.urls import reverse
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView

from .models import Post


# Create your views here.
class PostList(ListView):
    model = Post


class PostCreate(CreateView):
    model = Post
    fields = '__all__'

    def get_success_url(self):
        return reverse('home')

class PostUpdate(UpdateView):
    model = Post
    fields = '__all__'

    def get_success_url(self):
        return reverse('home')

class PostDetail(DetailView):
    model = Post


class PostDelete(DeleteView):
    model = Post

    def get_success_url(self):
        return reverse('home')
