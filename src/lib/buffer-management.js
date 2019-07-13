
export function applyHeader(buffer, code, packetNumber) {
  const header = Buffer.alloc(8)
  header.writeInt32BE(code, 0)
  header.writeInt32BE(packetNumber, 4)

  return Buffer.concat([header, buffer])
}

export function extractHeader(buffer) {
  const code = buffer.readInt32BE(0)
  const packetNumber = buffer.readInt32BE(4)
  const data = buffer.slice(8)

  return {code, packetNumber, data}
}
