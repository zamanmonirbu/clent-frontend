interface ConditionDescription {
  title: string;
  description: string;
}

export const conditionDescriptions: Record<string, ConditionDescription> = {
  fair: {
    title: 'Fair',
    description: 'De telefoon vertoont duidelijke tekens van gebruik zoals diepe krassen, deuken of andere merktekens. De telefoon is simlock vrij, volledig getest, en werkt als nieuw.'
  },
  good: {
    title: 'Good',
    description: 'De telefoon heeft zichtbare gebruikssporen, zoals krassen, deukjes, of andere markeringen. De telefoon is simlock vrij, volledig getest, en werkt als nieuw.'
  },
  excellent: {
    title: 'Excellent',
    description: 'De telefoon kan lichte gebruikssporen vertonen zoals kleine krasjes. De telefoon is simlock vrij, volledig getest, en werkt als nieuw.'
  }
};