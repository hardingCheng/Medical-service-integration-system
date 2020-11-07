import json
from datetime import datetime

from django.http import HttpResponse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.views import View

from msisystem.models import HInfo, Dep_Info, Dep_Detail_Info, Clinic_Info


def index(request):
    var = request.method
    return HttpResponse('index')


# getDInfo

class GetHInfoView(View):
    def get(self, request):
        data = json.dumps(list(HInfo.objects.all().values()))
        return HttpResponse(data)

    def post(self, request):
        return HttpResponse('个人修改页面')


class GetDInfoView(View):
    def get(self, request):
        global data
        gradeid = request.GET.get('gradeid')
        regionid = request.GET.get('regionid')
        print(gradeid, regionid)
        if gradeid == '全部' and regionid == '全部':
            data = json.dumps(list(HInfo.objects.all().values()))
        elif gradeid != '全部' and regionid == '全部':
            data = json.dumps(list(HInfo.objects.filter(hgrade__contains=gradeid).values()))
        elif gradeid == '全部' and regionid != '全部':
            data = json.dumps(list(HInfo.objects.filter(hlocal__contains=regionid).values()))
        elif gradeid != '全部' and regionid != '全部':
            data = json.dumps(
                list(HInfo.objects.filter(hgrade__contains=gradeid).filter(hlocal__contains=regionid).values()))
        return HttpResponse(data)

    def post(self, request):
        return HttpResponse('个人修改页面')


class GetDepListView(View):
    def get(self, request):
        datalist = json.dumps(list(Dep_Info.objects.all().values()))
        return HttpResponse(datalist)

    def post(self, request):
        return HttpResponse('个人修改页面')


class GetDepDetailListView(View):
    def get(self, request):
        detaillist = []
        datalists = list(Dep_Info.objects.all().values())
        for datalist in datalists:
            datas = list(Dep_Detail_Info.objects.filter(dep_detail_type_id=int(datalist.get('dep_type'))).values())
            datalist['dep_detail'] = datas
            detaillist.append(datalist)
        print(len(detaillist))
        return HttpResponse(json.dumps(detaillist))

    def post(self, request):
        return HttpResponse('个人修改页面')


class GetClinic(View):
    def get(self, request):
        # 地区
        regionid = request.GET.get('regionid')
        if regionid == '全部':
            datalists = list(Clinic_Info.objects.all().values())
        else:
            datalists = list(Clinic_Info.objects.filter(hlocal__exact=regionid).values())

        for datalist in datalists:
            datalist['hclinicstr_covid'] = datalist.get('hclinicstr_covid').split(',')
        return HttpResponse(json.dumps(datalists))

    def post(self, request):
        return HttpResponse('个人修改页面')
