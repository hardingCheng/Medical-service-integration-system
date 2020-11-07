from django.urls import path, re_path
from msisystem import views as msiviews

urlpatterns = [
    # name 就是给url起别名
    # 我们可以通过name找到这个路由
    re_path(r'^hinfo/$', msiviews.GetHInfoView.as_view(), name='hinfo'),
    re_path(r'^dinfo/$', msiviews.GetDInfoView.as_view(), name='dinfo'),
    re_path(r'^getdeplist/$', msiviews.GetDepListView.as_view(), name='getdeplist'),
    re_path(r'^getdepdeaillist/$', msiviews.GetDepDetailListView.as_view(), name='getdepdeaillist'),
    re_path(r'^getcovidinfo/$', msiviews.GetClinic.as_view(), name='getcovidinfo'),
]

"""  path('index/',bookviews.index,name='index'),
  re_path(r'^login/$',bookviews.LoginView.as_view(),name='login'),
  re_path(r'^center/$',bookviews.CenterView.as_view(),name='center'),
  re_path(r'^home/$',bookviews.HomeView.as_view(),name='home'),
  re_path(r'^setsession/$',bookviews.SetSession.as_view(),name='setsession'),
  re_path(r'^getsession/$',bookviews.GetSession.as_view(),name='getsession')"""
