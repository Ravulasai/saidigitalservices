import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

/* ─── Customer thank-you email ─── */
function customerEmailHtml({ name, service, message }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You - Sai Digital Services</title>
</head>
<body style="margin:0;padding:0;background-color:#0A0A0A;font-family:'Georgia',serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0A;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#1C1C1C;border:1px solid #D4AF37;border-radius:4px;overflow:hidden;">

          <!-- Gold top bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#D4AF37 0%,#FFD700 50%,#B8860B 100%);height:4px;"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td align="center" style="padding:40px 40px 24px;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:4px;color:#D4AF37;text-transform:uppercase;font-family:'Arial',sans-serif;">Sai Digital Services</p>
              <h1 style="margin:0;font-size:36px;font-weight:400;color:#ffffff;letter-spacing:1px;line-height:1.2;">
                Thank You, <span style="color:#D4AF37;">${name}</span>
              </h1>
              <div style="width:48px;height:1px;background:#D4AF37;margin:20px auto 0;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:0 40px 32px;">
              <p style="margin:0 0 20px;font-size:15px;color:#d1d5db;line-height:1.8;font-family:'Arial',sans-serif;">
                We have received your enquiry and are delighted to connect with you. Our team will review your requirements and reach out within <strong style="color:#D4AF37;">24 hours</strong>.
              </p>

              <!-- Summary card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0A;border:1px solid rgba(212,175,55,0.3);border-radius:4px;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:3px;color:#D4AF37;text-transform:uppercase;font-family:'Arial',sans-serif;">Your Enquiry Summary</p>
                    <div style="width:32px;height:1px;background:#D4AF37;margin:8px 0 16px;"></div>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#9ca3af;font-family:'Arial',sans-serif;width:40%;">Service Requested</td>
                        <td style="padding:6px 0;font-size:13px;color:#ffffff;font-family:'Arial',sans-serif;">${service || 'Not specified'}</td>
                      </tr>
                      ${message ? `
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#9ca3af;font-family:'Arial',sans-serif;vertical-align:top;">Message</td>
                        <td style="padding:6px 0;font-size:13px;color:#ffffff;font-family:'Arial',sans-serif;">${message}</td>
                      </tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 20px;font-size:15px;color:#d1d5db;line-height:1.8;font-family:'Arial',sans-serif;">
                In the meantime, feel free to reach us directly:
              </p>

              <!-- Contact row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:0 8px 0 0;width:50%;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0A;border:1px solid rgba(212,175,55,0.2);border-radius:4px;">
                      <tr>
                        <td style="padding:16px;">
                          <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;color:#D4AF37;text-transform:uppercase;font-family:'Arial',sans-serif;">Phone</p>
                          <p style="margin:0;font-size:13px;color:#ffffff;font-family:'Arial',sans-serif;">+91 6304484048</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="padding:0 0 0 8px;width:50%;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0A;border:1px solid rgba(212,175,55,0.2);border-radius:4px;">
                      <tr>
                        <td style="padding:16px;">
                          <p style="margin:0 0 4px;font-size:10px;letter-spacing:2px;color:#D4AF37;text-transform:uppercase;font-family:'Arial',sans-serif;">WhatsApp</p>
                          <p style="margin:0;font-size:13px;color:#ffffff;font-family:'Arial',sans-serif;">Chat instantly</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/916304484048" style="display:inline-block;padding:14px 36px;background:linear-gradient(135deg,#D4AF37 0%,#FFD700 50%,#B8860B 100%);color:#0A0A0A;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;border-radius:2px;font-family:'Arial',sans-serif;">
                      Chat on WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:linear-gradient(to right,transparent,#D4AF37,transparent);"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:24px 40px 32px;">
              <p style="margin:0 0 6px;font-size:11px;color:#6b7280;font-family:'Arial',sans-serif;letter-spacing:1px;">
                © ${new Date().getFullYear()} Sai Digital Services &nbsp;·&nbsp; Mogalthuru, West Godavari, Andhra Pradesh
              </p>
              <p style="margin:0;font-size:10px;color:#4b5563;font-family:'Arial',sans-serif;">
                Websites that grow your business
              </p>
            </td>
          </tr>

          <!-- Gold bottom bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#D4AF37 0%,#FFD700 50%,#B8860B 100%);height:4px;"></td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

/* ─── Admin notification email ─── */
function adminEmailHtml({ name, phone, email, businessName, service, message }) {
  const rows = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email],
    ['Business', businessName || '—'],
    ['Service', service || '—'],
    ['Message', message || '—'],
  ];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Lead - Sai Digital Services</title>
</head>
<body style="margin:0;padding:0;background-color:#0A0A0A;font-family:'Arial',sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0A;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#1C1C1C;border:1px solid #D4AF37;border-radius:4px;overflow:hidden;">

          <!-- Gold top bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#D4AF37 0%,#FFD700 50%,#B8860B 100%);height:4px;"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;">
              <p style="margin:0 0 6px;font-size:10px;letter-spacing:4px;color:#D4AF37;text-transform:uppercase;">New Lead</p>
              <h1 style="margin:0;font-size:28px;font-weight:400;color:#ffffff;letter-spacing:1px;">
                Contact Form Submission
              </h1>
              <div style="width:40px;height:1px;background:#D4AF37;margin-top:16px;"></div>
            </td>
          </tr>

          <!-- Lead details -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0A;border:1px solid rgba(212,175,55,0.3);border-radius:4px;">
                <tr>
                  <td style="padding:24px;">
                    ${rows.map(([label, value]) => `
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
                      <tr>
                        <td style="width:30%;font-size:11px;letter-spacing:1px;color:#D4AF37;text-transform:uppercase;vertical-align:top;padding-top:2px;">${label}</td>
                        <td style="font-size:14px;color:#ffffff;line-height:1.6;">${value}</td>
                      </tr>
                    </table>`).join('')}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick reply button -->
          <tr>
            <td align="center" style="padding:0 40px 32px;">
              <a href="mailto:${email}" style="display:inline-block;padding:12px 32px;background:linear-gradient(135deg,#D4AF37 0%,#FFD700 50%,#B8860B 100%);color:#0A0A0A;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;border-radius:2px;">
                Reply to ${name}
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:linear-gradient(to right,transparent,#D4AF37,transparent);"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:20px 40px 28px;">
              <p style="margin:0;font-size:11px;color:#6b7280;">
                Sai Digital Services &nbsp;·&nbsp; Admin Notification
              </p>
            </td>
          </tr>

          <!-- Gold bottom bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#D4AF37 0%,#FFD700 50%,#B8860B 100%);height:4px;"></td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, businessName, service, message } = body;
    const fullPhone = `+91 ${phone}`;

    // Send both emails in parallel
    const [customerResult, adminResult] = await Promise.all([
      resend.emails.send({
        from: `Sai Digital Services <${process.env.FROM_EMAIL}>`,
        to: [email],
        subject: `Thank you for reaching out, ${name} - Sai Digital Services`,
        html: customerEmailHtml({ name, service, message }),
      }),
      resend.emails.send({
        from: `Sai Digital Services <${process.env.FROM_EMAIL}>`,
        to: [process.env.ADMIN_EMAIL],
        subject: `New Lead: ${name} - ${service || 'General Enquiry'}`,
        html: adminEmailHtml({ name, phone: fullPhone, email, businessName, service, message }),
        replyTo: email,
      }),
    ]);

    if (customerResult.error || adminResult.error) {
      console.error('Resend error:', customerResult.error || adminResult.error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
