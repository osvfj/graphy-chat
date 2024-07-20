export function extractMembers(content: string) {
  const pattern = /(AM|PM) - ([\w\sáéíóúüñÁÉÍÓÚÜÑ0-9()+.-]+)(?=:)/g;
  const contacts = new Set<string>();
  let match;

  while ((match = pattern.exec(content)) !== null) {
    contacts.add(match[0].trim().slice(5));
  }
  return Array.from(contacts);
}

export function getNumberOfMessages(content: string, contact: string) {
  const lines = content.split("\n");
  const messagesOf = lines.filter((l) => l.includes(contact));
  return messagesOf.filter((l) => {
    if (l.includes(".opus") || l.includes(".webp")) {
      return false;
    }
    return true;
  }).length;
}

export function getNumberOfStickers(content: string, contact: string) {
  const lines = content.split("\n");
  const messagesOf = lines.filter((l) => l.includes(contact));
  return messagesOf.filter((l) => l.includes(".webp")).length;
}

export function getNumberOfAudios(content: string, contact: string) {
  const lines = content.split("\n");
  const messagesOf = lines.filter((l) => l.includes(contact));
  return messagesOf.filter((l) => l.includes(".opus")).length;
}
