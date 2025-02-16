export function speaker(text: string) {
  const synth = window.speechSynthesis
  const utterThis = new SpeechSynthesisUtterance(text)
  utterThis.lang = 'es-ES'
  utterThis.voice = synth.getVoices().find(voice => voice.name === 'Google español (Latinoamérica)') || synth.getVoices()[0]
  synth.speak(utterThis)
}

export function stopSpeaker() {
  window.speechSynthesis.cancel()
}