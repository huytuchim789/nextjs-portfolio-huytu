# EmailJS Template Setup Guide

## Steps to Create Your Email Template:

1. **Login to EmailJS Dashboard**
   - Go to https://www.emailjs.com/
   - Sign in to your account

2. **Navigate to Email Templates**
   - Click on "Email Templates" in the sidebar
   - Click "Create New Template"

3. **Configure Your Template**

   ### Subject Line:
   ```
   New Contact Form Submission from {{from_name}}
   ```

   ### Email Content (HTML):
   ```html
   <h2>New Contact Form Submission</h2>
   
   <p><strong>From:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Phone:</strong> {{phone}}</p>
   <p><strong>Service Requested:</strong> {{service}}</p>
   
   <h3>Message:</h3>
   <p style="white-space: pre-wrap;">{{message}}</p>
   
   <hr>
   <p><small>This email was sent from your portfolio website contact form.</small></p>
   ```

   ### To Email:
   - Set this to your email address where you want to receive messages

   ### From Name:
   ```
   {{from_name}}
   ```

   ### From Email:
   - You can use your email or set it to: `{{from_email}}`
   - Note: Some email services require this to be your verified email

   ### Reply To:
   ```
   {{from_email}}
   ```

4. **Save Your Template**
   - Click "Save"
   - You'll see your Template ID (looks like: template_xxxxxxx)

5. **Copy Your Template ID**
   - Copy the template ID from the dashboard
   - Update your .env.local file with this ID

## Template Variables Used in Your Form:
- `{{from_name}}` - Full name of the sender
- `{{from_email}}` - Email address of the sender
- `{{phone}}` - Phone number (optional)
- `{{service}}` - Selected service type
- `{{message}}` - The message content
- `{{to_name}}` - Your name (Tran Tu Huy)

## Testing Your Template:
1. After saving, click "Test It" in EmailJS
2. Fill in test values for each variable
3. Send a test email to verify it works

Once you have your template ID, update the .env.local file!