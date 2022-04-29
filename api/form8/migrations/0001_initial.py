# Generated by Django 4.0.1 on 2022-04-20 19:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='NoticeOfApplicationToVaryOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField()),
                ('modified', models.DateTimeField()),
                ('type', models.CharField(blank=True, default='', max_length=100)),
                ('status', models.CharField(blank=True, default='', max_length=100)),
                ('last_filed', models.DateTimeField(blank=True, null=True)),
                ('submission_id', models.CharField(max_length=100, null=True)),
                ('transaction_id', models.CharField(max_length=100, null=True)),
                ('package_number', models.CharField(max_length=100, null=True)),
                ('package_url', models.CharField(max_length=200, null=True)),
                ('pdf_types', models.CharField(blank=True, default='', max_length=100)),
                ('last_printed', models.DateTimeField(blank=True, null=True)),
                ('description', models.CharField(blank=True, default='', max_length=200)),
                ('key_id', models.CharField(blank=True, max_length=32, null=True)),
                ('data', models.BinaryField(blank=True, null=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='notice_of_application_to_vary_order_id', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='FormPdf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('data', models.BinaryField(blank=True, null=True)),
                ('json_data', models.BinaryField(blank=True, null=True)),
                ('key_id', models.CharField(blank=True, max_length=32, null=True)),
                ('pdf_type', models.CharField(blank=True, max_length=32, null=True)),
                ('version', models.CharField(blank=True, max_length=32, null=True)),
                ('notice_of_application_to_vary_order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notice_of_application_to_vary_order_form_pdf', to='form8.noticeofapplicationtovaryorder')),
            ],
        ),
        migrations.AddConstraint(
            model_name='formpdf',
            constraint=models.UniqueConstraint(fields=('notice_of_application_to_vary_order_id', 'pdf_type'), name='unique_pdf_type_notice_of_application_to_vary_order_id'),
        ),
    ]