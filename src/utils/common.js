export function parseEnvList(envValue) {
  return envValue?.split(",").map((origin) => origin.trim()) || [];
}

export function messageResponse(res, message, statusCode, data) {
  const response = { message };

  if (arguments.length === 4) {
    response.data = data;
  }

  res.status(statusCode).json(response);
}

export function errorResponse(res, error, data, status = 500) {
  const { message, statusCode = status, errorData } = error;
  res.status(statusCode).json({
    message: message,
    errorData,
    data,
  });
}
