import { Component, OnInit } from '@angular/core';
declare const ClipboardJS: any;

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.scss']
})
export class SmileyComponent implements OnInit {
  smileys = [
    { name: '(╯°□°）╯︵ ┻━┻', val: '(╯°□°）╯︵ ┻━┻', copy: false },
    { name: '(┛◉Д◉)┛彡┻━┻', val: '(┛◉Д◉)┛彡┻━┻', copy: false },
    { name: '(ﾉ≧∇≦)ﾉ ﾐ ┻━┻', val: '(ﾉ≧∇≦)ﾉ ﾐ ┻━┻', copy: false },
    { name: '(ノಠ益ಠ)ノ彡┻━┻', val: '(ノಠ益ಠ)ノ彡┻━┻', copy: false },
    { name: '(╯ರ ~ ರ）╯︵ ┻━┻', val: '(╯ರ ~ ರ）╯︵ ┻━┻', copy: false },
    { name: '(┛ಸಸ)┛彡┻━┻', val: '(┛ಸಸ)┛彡┻━┻', copy: false },
    { name: '(ﾉ´・ω・)ﾉ ﾐ ┻━┻', val: '(ﾉ´・ω・)ﾉ ﾐ ┻━┻', copy: false },
    { name: '(ノಥ,｣ಥ)ノ彡┻━┻', val: '(ノಥ,｣ಥ)ノ彡┻━┻', copy: false },
    { name: '( ͡° ͜ʖ ͡°)', val: '( ͡° ͜ʖ ͡°)', copy: false },
    { name: 'BITCH LASAGNA', val: 'BITCH LASAGNA BITCH LASAGN\nBITCH LASAG            BITCH LASAG\nBITCH LASAG            BITCH LASA\nBITCH LASAG BITCH LASAG\nBITCH LASAG            BITCH LASA\nBITCH LASAG            BITCH LASAG\nBITCH LASAGNA BITCH LASAGN\n\nBITCH LASAGNA BITCH LASAGNA\nBITCH LASAGNA BITCH LASAGNA\n                BITCH LASAGNA\n                BITCH LASAGNA\n                BITCH LASAGNA\nBITCH LASAGNA BITCH LASAGNA\nBITCH LASAGNA BITCH LASAGNA\n\nBITCH LASAGNA BITCH LASAGNA\nBITCH LASAGNA BITCH LASAGNA\n                BITCH LASAGNA\n                BITCH LASAGNA\n                BITCH LASAGNA\n                BITCH LASAGNA\n                BITCH LASAGNA\n\n   ITCH LASAGNA BITCH LASAGN\nBITCH LASAGNA BITCH LASAGNA\nBITCH LASA                 BITCH LASA\nBITCH LASA\nBITCH LASA                 BITCH LASA\nBITCH LASAGNA BITCH LASAGNA\n   ITCH LASAGNA BITCH LASAGN\n\nBITCH LASAG            BITCH LASAG\nBITCH LASAG            BITCH LASAG\nBITCH LASAG            BITCH LASAG\nBITCH LASAGNA BITCH LASAGNA\nBITCH LASAG            BITCH LASAG\nBITCH LASAG            BITCH LASAG\nBITCH LASAG            BITCH LASAG\n', copy: false },
    { name: '¯\_(ツ)_/¯', val: '¯\_(ツ)_/¯', copy: false }
  ];

  text = "";

  constructor() { }

  ngOnInit(): void {
    new ClipboardJS('.copybtn');
  }

}
