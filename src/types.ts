export interface ImageWithCaption {
  id: string;
  file: File;
  url: string;
  filename: string;
  size: number;
  type: string;
  uploadedAt: Date;
  caption?: string;
  isProcessing?: boolean;
}