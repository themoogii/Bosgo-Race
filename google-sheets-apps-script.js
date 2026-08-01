const SHEET_NAME = 'Registrations';

const HEADERS = [
  'Timestamp',
  'Registration ID',
  'Division',
  'First name',
  'Last name',
  'Nationality',
  'Phone number',
  'Email address',
  'Birthday',
  '10K PB',
  'Payment Status',
  'Create Bosgo Account'
];

function doPost(e) {
  const sheet = getRegistrationSheet_();
  const data = JSON.parse(e.postData.contents || '{}');

  sheet.appendRow(HEADERS.map((header) => {
    if (header === 'Timestamp') return new Date();
    return data[header] || '';
  }));

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getRegistrationSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = firstRow.some(Boolean);

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}
