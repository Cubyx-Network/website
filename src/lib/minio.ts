import { Client } from "minio";

export const minio = new Client({
  endPoint: "cdn.cubyx.eu",
  port: 443,
  useSSL: true,
  accessKey: process.env.MINIO_TOKEN as string,
  secretKey: process.env.MINIO_KEY as string,
});

export const uploadFile = (file: Buffer, fileName: string): string => {
  minio.putObject("files", fileName, file, (err) => {
    if (err) throw err;
  });

  return `https://cdn.cubyx.eu/files/${fileName}`;
};
