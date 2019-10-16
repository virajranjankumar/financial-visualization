class Main {
  public static void main(String[] args)
  {
   PdfReader reader = new PdfReader(
     new FileInputStream(new File("file.pdf")));
   int nbmax = reader.getNumberOfPages();
   System.out.println("nb pages " + nbmax);

   for (int i = 1; i <= nbmax; i++) {
      System.out.println("----------------------------------------");
      System.out.println("Page " + i);
      PdfDictionary dico = reader.getPageN(i);
      PdfDictionary ressource = dico.getAsDict(PdfName.RESOURCES);
      PdfDictionary font = ressource.getAsDict(PdfName.FONT);
      // we got the page fonts
      Set keys = font.getKeys();
      Iterator it = keys.iterator();
      while (it.hasNext()) {
         PdfName name = (PdfName) it.next();
         PdfDictionary fontdict = font.getAsDict(name);
         PdfObject typeFont = fontdict.getDirectObject(PdfName.SUBTYPE);
         PdfObject baseFont = fontdict.getDirectObject(PdfName.BASEFONT);               
         System.out.println(baseFont.toString());              
      }
   }
  }
}
