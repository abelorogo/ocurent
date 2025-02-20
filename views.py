from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from django.conf import settings  # Import settings to access email credentials
import re

def home(request):
    return render(request, 'electricity/home.html')

def about(request):
    return render(request, 'electricity/about.html')

def contact(request):
    return render(request, 'electricity/contact.html')

def collection(request):
    return render(request, 'electricity/collection.html')

def shop(request):
    return render(request, 'electricity/shop.html')

def contact_view(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        # Validate email format
        email_regex = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        if not re.match(email_regex, email):
            messages.error(request, "Invalid email address. Please enter a valid email.")
            return redirect("contact")  # Redirect back to the form
        
        # Email content
        email_subject = f"New Contact Form Submission: {subject}"
        email_message = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        try:
            # Send email using Django email settings
            send_mail(
                email_subject,
                email_message,
                settings.EMAIL_HOST_USER,  # Use email from settings.py
                ["abelorogo@gmail.com"],  # Recipient email
                fail_silently=False,
            )
            messages.success(request, "Your message has been sent successfully!")
        except Exception as e:
            messages.error(request, f"Error sending message: {e}")

        return redirect("contact")  # Redirect back to the form

    return render(request, "electricity/contact.html")
