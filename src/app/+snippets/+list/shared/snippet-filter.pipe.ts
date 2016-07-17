import { Pipe, PipeTransform } from '@angular/core';

import { Snippet } from '../../shared';

@Pipe({
  name: 'snippetFilter'
})
export class SnippetFilterPipe implements PipeTransform {

  transform(value: Snippet[], args: string): Snippet[] {
    if (args) {
      let filtered = value.filter((s: Snippet) => {;
        return s.name.toLowerCase().indexOf(args.toLowerCase()) >= 0
        || s.description.toLowerCase().indexOf(args.toLowerCase()) >= 0;
      });

      return filtered;
    } else {
      return value;
    }
  }

}
