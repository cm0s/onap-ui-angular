export const template = `
<div [ngClass]="classes" [attr.disabled]="disabled || undefined" [innerHtml]="svgIconContentSafeHtml" [attr.data-tests-id]="testId"></div>
`;
