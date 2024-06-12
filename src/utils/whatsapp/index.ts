export function extractMembers(content: string) {
  const pattern = /(AM|PM) - ([\w\sáéíóúüñÁÉÍÓÚÜÑ0-9()+.-]+)(?=:)/g;
  const contacts = new Set<string>();
  let match;

  while ((match = pattern.exec(content)) !== null) {
    contacts.add(match[0].trim().slice(5));
  }
  return Array.from(contacts);
}
