const CONTENT_VALIDATION_MIN_LENGTH = 5;
const CONTENT_VALIDATION_MAX_LENGTH = 240;

export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return (
      content.length > CONTENT_VALIDATION_MIN_LENGTH &&
      content.length <= CONTENT_VALIDATION_MAX_LENGTH
    );
  }

  constructor(content: string) {
    const isContentLengthInValid =
      this.validateContentLength(content) === false;

    if (isContentLengthInValid) {
      throw new Error(
        `Content length must be between ${CONTENT_VALIDATION_MIN_LENGTH} and ${CONTENT_VALIDATION_MAX_LENGTH} characters`,
      );
    }

    this.content = content;
  }
}
