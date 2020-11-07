from django.db import models

# Create your models here.
"""
1.ORM
    表->类
    字段->属性
2.模型类需要继承自models.Model  class BookInfo(models.Model):
3.模型类会自动为我们添加（生成一个主键）
4.#字段名字=属性类型（选项）
    属性名字：不要使用python  mysql关键字  不要使用连续下划线（__）
    属性的类型 和mysql类似
    选项： CharFiled  必须是指max_length
            null = True
            unique = True
            default
"""


class HInfo(models.Model):
    htitle = models.CharField(max_length=255, verbose_name='医院名称')
    htime = models.CharField(max_length=255, verbose_name='预约放号时间')
    hgrade = models.CharField(max_length=255, verbose_name='医院等级')
    himg = models.CharField(max_length=255, verbose_name='医院图片')
    hlocal = models.CharField(max_length=255, verbose_name='医院所属地')

    class Meta:
        db_table = 'hospital_info'
        verbose_name = '医院信息'

    def __str__(self):
        return self.htitle


class Dep_Info(models.Model):
    dep_name = models.CharField(max_length=255, verbose_name='科室名字')
    dep_type = models.IntegerField()

    class Meta:
        db_table = 'department_info'
        verbose_name = '科室分类'

    def __str__(self):
        return self.dep_name


class Dep_Detail_Info(models.Model):
    dep_detail_title = models.CharField(max_length=10, verbose_name='科目详细名字')
    dep_detail_type = models.ForeignKey(Dep_Info, on_delete=models.CASCADE, verbose_name='科目对应科室')

    class Meta:
        db_table = 'department_detail_Info'
        verbose_name = '科目分类'

    def __str__(self):
        return self.dep_detail_title


class Clinic_Info(models.Model):
    htitle = models.CharField(max_length=255, verbose_name='医院名称')
    himg = models.CharField(max_length=255, verbose_name='医院图片')
    hlocal = models.CharField(max_length=255, verbose_name='医院所属地')
    hclinicstr_covid = models.CharField(max_length=255, verbose_name='医院所属地')

    class Meta:
        db_table = 'department_clinic_Info'
        verbose_name = '科目分类'

    def __str__(self):
        return self.htitle
