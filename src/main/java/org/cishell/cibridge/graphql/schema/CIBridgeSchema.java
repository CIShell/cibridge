package org.cishell.cibridge.graphql.schema;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;


public class CIBridgeSchema {
    public static String schemaString = CIBridgeSchema.entryToString("/cibridge-schema.graphqls");

    private static String entryToString(String entryPath) {
        try {
            InputStream inputStream = CIBridgeSchema.class.getResourceAsStream(entryPath);
            final int bufferSize = 1024;
            final char[] buffer = new char[bufferSize];
            final StringBuilder out = new StringBuilder();
            Reader in = new InputStreamReader(inputStream, "UTF-8");
            for (;;) {
                int rsz = in.read(buffer, 0, buffer.length);
                if (rsz < 0)
                    break;
                out.append(buffer, 0, rsz);
            }
            return out.toString();
        } catch(Exception e) {
            return "";
        }
    }

    public static void main(String[] args) {
        System.out.println(CIBridgeSchema.schemaString);
    }
}
