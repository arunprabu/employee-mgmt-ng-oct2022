import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('creates an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "random text" to "random text" when no params mentioned', () => {
    const pipe = new EllipsisPipe();
    const transformedText = pipe.transform('random text');
    expect(transformedText).toBe('random text');
  });

  // transform random text to random tex... when 10 is passed as parameter

  // negative spec 
  // if null, undefined, empty string ... 

  
});
