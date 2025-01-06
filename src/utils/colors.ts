interface IPhoneColor {
  name: string;
  value: string;
}

const iPhoneColors: Record<string, IPhoneColor[]> = {
  'iPhone 12': [
    { name: 'Purple', value: '#E4D0E3' },
    { name: 'Blue', value: '#215E7C' },
    { name: 'Green', value: '#E3F1E3' },
    { name: 'Red', value: '#E71D32' },
    { name: 'White', value: '#F9F6EF' },
    { name: 'Black', value: '#1F2020' }
  ],
  'iPhone 13': [
    { name: 'Pink', value: '#FDE2DD' },
    { name: 'Blue', value: '#437792' },
    { name: 'Midnight', value: '#1F2020' },
    { name: 'Starlight', value: '#F9F6EF' },
    { name: 'Green', value: '#505952' },
    { name: 'Red', value: '#E71D32' }
  ],
  'iPhone 14': [
    { name: 'Blue', value: '#A7C1D9' },
    { name: 'Purple', value: '#E5DDEA' },
    { name: 'Midnight', value: '#1F2020' },
    { name: 'Starlight', value: '#F9F6EF' },
    { name: 'Red', value: '#E71D32' }
  ],
  'iPhone 15': [
    { name: 'Black', value: '#1F2020' },
    { name: 'Blue', value: '#236F8E' },
    { name: 'Green', value: '#505952' },
    { name: 'Pink', value: '#F4D5CC' },
    { name: 'Yellow', value: '#F3E3B6' }
  ]
};

export function getIPhoneColors(modelName: string): IPhoneColor[] {
  // Extract the base model name (e.g., "iPhone 13 Pro Max" -> "iPhone 13")
  const baseModel = modelName.match(/(iPhone \d+)/)?.[1];
  
  if (!baseModel) {
    return iPhoneColors['iPhone 15']; // Default to latest model colors
  }

  return iPhoneColors[baseModel] || iPhoneColors['iPhone 15'];
}