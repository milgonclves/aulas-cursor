---
name: commit
description: >-
  Cria um commit git das alterações atuais, com mensagem no estilo do
  repositório. Use quando o usuário invocar /commit ou pedir para commitar
  o trabalho atual.
disable-model-invocation: true
---

# Commit

Grave as alterações atuais em um commit. Não faça push.

## Passos

1. Rode em paralelo:
   - `git status`
   - `git diff` (staged e unstaged)
   - `git log -8 --oneline`

2. Se não houver mudanças, avise e pare. Não crie commit vazio.

3. Deixe de fora segredos (`.env`, credenciais, chaves). Se algum estiver entre as mudanças, avise e não o inclua.

4. Escreva a mensagem em 1–2 frases, no estilo do `git log`, focando no porquê. Sem histórico, use português.

5. No PowerShell:

```powershell
git add <arquivos relevantes>
git commit -m @"
Mensagem aqui.

"@
git status
```

## Proibições

- Não altere `git config`
- Não use `--no-verify`, `reset`, force push, `amend` nem rebase interativo
- Não faça push
- Se um hook rejeitar o commit, corrija o problema e crie um commit novo
