import MyComponent from '../../../../slices/TextImageRight';

export default {
  title: 'slices/TextImageRight'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"heading1","text":"Deploy bricks-and-clicks experiences","spans":[]}],"image":{"50":{"dimensions":{"width":50,"height":50},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=50&h=50&fit=crop"},"dimensions":{"width":100,"height":100},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=100&h=100&fit=crop"},"bool":false},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TextimageLeft = () => <MyComponent slice={{"variation":"textimageLeft","name":"TextimageLeft","slice_type":"text_image_right","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"},"titleField":[{"type":"paragraph","text":"Consequat consectetur consequat laborum ut aliqua. Esse officia aliquip pariatur ut non ullamco ex veniam do qui officia. Enim qui ut excepteur aliquip id occaecat incididunt sint laborum eiusmod anim velit.","spans":[]}]},"id":"_TextimageLeft"}} />
_TextimageLeft.storyName = 'TextimageLeft'

export const _TitleImage = () => <MyComponent slice={{"variation":"titleImage","name":"TitleImage","slice_type":"text_image_right","items":[],"primary":{"title":[{"type":"heading2","text":"Reinvent synergistic infrastructures","spans":[]}],"image":{"dimensions":{"width":100,"height":100},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=100&h=100&fit=crop"}},"id":"_TitleImage"}} />
_TitleImage.storyName = 'TitleImage'
