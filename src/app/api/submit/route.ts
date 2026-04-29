import { NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8724327895:AAG4lf55tebnB0RhCqxwoTa_-rG4T8QXutQ';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '-5179603882';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, email, interest, message: userMessage } = data;
    const interestLabel = interest || 'Chưa chọn';

    const message = `🏢 KHÁCH HÀNG MỚI - VIMGROUP!
━━━━━━━━━━━━━━━━━━
👤 Đối tác: ${name}
📞 Hotline: ${phone}
📧 Email: ${email || 'Không có'}
🎯 Quan tâm: ${interestLabel}
💬 Ghi chú: ${userMessage || 'Không có'}
📌 Nguồn: Website VIMGROUP V2
━━━━━━━━━━━━━━━━━━
⚡ Phản hồi ngay để giữ lead!`;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API responded with ' + response.status);
    }

    // GỬI ĐẾN GOOGLE APPS SCRIPT (Ghi Sheet + Email chào mừng)
    const GOOGLE_APPS_SCRIPT_URL = process.env.GAS_URL || "https://script.google.com/macros/s/AKfycbzV9Qk6oALpj0e09ABB6ofj2RGKfw1fGXBvDnLe38lcg-1yB3fQNtiPohwccb0VT97v/exec";

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...data,
          source: "vimgroup.vn - Corporate Website"
        }),
      });
    } catch (gasError) {
      console.error('GAS Error (non-blocking):', gasError);
    }

    return NextResponse.json({ success: true, message: "Gửi thông tin thành công." });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Lỗi khi gửi thông tin:', errorMessage);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
