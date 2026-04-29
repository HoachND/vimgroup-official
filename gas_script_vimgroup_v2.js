/**
 * GOOGLE APPS SCRIPT - VIMGROUP V2 AUTOMATION
 * Chức năng: Lưu lead vào Google Sheets + Gửi Email tự động cho khách hàng
 * Hướng dẫn: 
 * 1. Mở file Google Sheet "Data Customer_VIMGROUP_Version 2_main"
 * 2. Chọn Tiện ích mở rộng > Apps Script
 * 3. Dán code này vào, nhấn Lưu và Triển khai (Deploy) dưới dạng Web App
 * 4. Cấp quyền truy cập cho script
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 1. Lưu dữ liệu vào Sheet
    // Cột: Thời gian, Họ tên, Số điện thoại, Email, Lĩnh vực quan tâm, Nội dung yêu cầu, Nguồn
    sheet.appendRow([
      new Date(),
      data.name,
      "'" + data.phone, // Dùng dấu ' để tránh mất số 0 ở đầu
      data.email,
      data.interest || "Chưa chọn",
      data.message || "Không có",
      data.source || "VIMGROUP Website V2"
    ]);

    // 2. Gửi Email tự động cho khách hàng (nếu có email)
    if (data.email) {
      sendThankYouEmail(data);
    }

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

function sendThankYouEmail(data) {
  var subject = "Cảm ơn Quý đối tác đã quan tâm tới Hệ sinh thái VIMGROUP";

  var htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
      <div style="background-color: #C8102E; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase;">VIMGROUP</h1>
        <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">Kiến tạo nền tảng - Dẫn dắt tương lai</p>
      </div>
      
      <div style="padding: 30px; border: 1px solid #eee; border-top: none;">
        <p>Kính gửi <strong>${data.name}</strong>,</p>
        
        <p>VIMGROUP xin trân trọng cảm ơn Quý đối tác đã quan tâm và để lại thông tin tìm hiểu về hệ sinh thái của chúng tôi.</p>
        
        <p>Chúng tôi đã tiếp nhận yêu cầu hợp tác trong lĩnh vực: <strong>${data.interest || 'Đa ngành'}</strong>. Đội ngũ chuyên gia của VIMGROUP sẽ liên hệ trực tiếp với Quý đối tác qua số điện thoại <strong>${data.phone}</strong> trong thời gian sớm nhất để tư vấn chi tiết.</p>
        
        <p>Trong lúc chờ đợi, Quý đối tác có thể kết nối trực tiếp với chúng tôi qua Messenger để được hỗ trợ nhanh nhất:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://m.me/vimai.vn" style="background-color: #C8102E; color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">
            NHẮN TIN QUA MESSENGER 💬
          </a>
        </div>
        
        <p>Trân trọng,</p>
        <p><strong>Ban Điều hành VIMGROUP</strong><br>
        Email: vimgroupjsc@gmail.com<br>
        Hotline: 098 696 9339<br>
        Địa chỉ: B88, Phố Trúc, KĐT Ecopark.</p>
      </div>
      
      <div style="text-align: center; padding: 20px; font-size: 12px; color: #999;">
        <p>© 2026 VIMGROUP - All Rights Reserved.</p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody
  });
}
