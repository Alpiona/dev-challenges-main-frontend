const FileDirectories = {
  GAME_IMAGE: "games/images",
  GAME_COVER_IMAGE: "games/cover_images",
  GAME_BUILD: "games/builds",
};

export type UploadFileParams = {
  file: File;
  type: keyof typeof FileDirectories;
};

export type UploadFileData = {
  fileName: string;
  url: string;
  size?: string;
  originalFileName?: string;
};

export type UploadBuildParams = {
  file: File;
  version: string;
  operatingSystem: string;
};

export type UploadBuildData = {
  fileName: string;
  url: string;
  size: string;
  operatingSystem: string;
  version: string;
};
