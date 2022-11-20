from django.urls import path
from . import views
from  .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView)
from rest_framework_simplejwt.views import (TokenRefreshView)
from django.contrib import admin


 
urlpatterns = [
    #sign up
    path('register/', views.register),
    #login(sign in)
    # path('login/', MyTokenObtainPairView.as_view(), name='login'),
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', views.index),
    path('products/', views.products),
    path('products/<id>', views.products),  
    path('addProduct/', views.addProduct),
    path('getcategories/', views.getCategories),
    path('addcategory/', views.addCategory),
    path('products/<id>/', views.getProducts),
    path('getProducts/', views.getProducts),    
    path('addOrder/', views.addOrder),
    path('notes/', views.getNotes),
    path('logout/', views.logout),
    path('getImages/', views.getImages),
    path('posts/',views.APIViews.as_view(),name='posts_list'),
  
]


 