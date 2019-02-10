from django import template
register = template.Library()

@register.filter
def get_fields(form_obj):
	""" Iterate over and return all fiels in form object """
	return [(field.name, field.value_to_string(form_obj)) for field in form_obj._meta.fields ]
    
