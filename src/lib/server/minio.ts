import { Client } from 'minio';
import {
	MINIO_ACCESS_KEY,
	MINIO_BUCKET,
	MINIO_ENDPOINT,
	MINIO_PORT,
	MINIO_SECRET_KEY
} from '$env/static/private';
import * as util from 'util';
import * as stream from 'stream';

export const minio = new Client({
	endPoint: MINIO_ENDPOINT,
	port: parseInt(MINIO_PORT),
	accessKey: MINIO_ACCESS_KEY,
	secretKey: MINIO_SECRET_KEY,
	useSSL: true,
	pathStyle: true
});

export async function downloadFilesFromMinio(filePaths: string[]): Promise<string[]> {
	const fileContents = [];

	for (const filePath of filePaths) {
		const chunks: Buffer[] = [];
		const fileStream = await minio.getObject(MINIO_BUCKET, filePath);

		const streamToPromise = util.promisify(stream.pipeline);

		try {
			await streamToPromise(
				fileStream,
				new stream.Writable({
					write(chunk, encoding, callback) {
						chunks.push(chunk);
						callback();
					}
				})
			);

			const fileContent = Buffer.concat(chunks).toString();
			fileContents.push(fileContent);
		} catch (error) {
			console.error(`Error downloading ${filePath}: ${error}`);
		}
	}

	return fileContents;
}
