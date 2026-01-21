export const runAuditLogic = (code) => {
  const findings = []
  const lines = code.split('\n')

  lines.forEach((line, index) => {
    if (line.includes('var ')) {
      findings.push({
        line: index + 1,
        msg: 'Uso de "var". Usa let o const.',
        severity: 'Baja'
      })
    }

    if (line.includes('alert(')) {
      findings.push({
        line: index + 1,
        msg: 'Uso de alert(). No recomendado en producción.',
        severity: 'Media'
      })
    }

    if (line.includes(' == ') && !line.includes(' === ')) {
      findings.push({
        line: index + 1,
        msg: 'Comparación débil (==). Usa ===.',
        severity: 'Media'
      })
    }
  })

  return findings
}
